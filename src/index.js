const app = require('./server')();
const port = app.get('port');

const CeiCrawler = require('cei-crawler');
const { CeiErrorTypes } = require('cei-crawler')

let ceiCrawler = new CeiCrawler('', '', {});

var tokken = 123

var ceiData = {'123': {
    user: 'xxx',
    password: 'xxx'
}}

// User authentication
app.post('/login', async (req, res) => {

    let headers = req.headers

    let user = headers.user
    let password = headers.password

    ceiCrawler._username = user
    ceiCrawler._password = password

    let response = {
        code: null,
        message: '',
        tokken: ''
    }

    try {
        await ceiCrawler.login();
    } catch (err) {
        response.message = err.type
        response.code = 200
        response.tokken = ''
        return res.send(response)    
    }

    console.log(req.headers)

    response.message = 'Login efetuado com sucesso.'
    response.code = 200
    response.tokken = tokken
    return res.send(response)
}

)

// Get yields
app.get('/dividends', async (req, res) => {
    
    let parTokken = req.query.tokken
    let login = ceiData[parTokken]
    
    ceiCrawler._username = login.user
    ceiCrawler._password = login.password

    let response = {
        code: null,
        message: '',
        data: {}
    }
    
    try {
        let date = new Date('2021/02/08')
        const dividends = await ceiCrawler.getDividends();
        response.data = dividends[0]
    } catch (err) {
        response.code = 200
        response.message = err.type
        return res.send(response)
    }

    response.code = 200
    response.message = 'Dados obtidos com sucesso.'
    
    return res.send(response)
     
})

// Get stock history
app.get('/stockHistory', async (req, res) => {
    
    let parTokken = req.query.tokken
    let login = ceiData[parTokken]
    
    ceiCrawler._username = login.user
    ceiCrawler._password = login.password

    let response = {
        code: null,
        message: '',
        data: {}
    }
    
    try {
        const stockHistory = await ceiCrawler.getStockHistory();;
        response.data = stockHistory[0]
    } catch (err) {
        response.code = 200
        response.message = err.type
        return res.send(response)
    }

    response.code = 200
    response.message = 'Dados obtidos com sucesso.'
    
    return res.send(response)
     
})

// Get treasure
app.get('/treasure', async (req, res) => {
    
    let parTokken = req.query.tokken
    let login = ceiData[parTokken]
    
    ceiCrawler._username = login.user
    ceiCrawler._password = login.password

    let response = {
        code: null,
        message: '',
        data: {}
    }
    
    try {
        const treasure = await ceiCrawler.getTreasures();
        response.data = treasure[0]
    } catch (err) {
        response.code = 200
        response.message = err.type
        return res.send(response)
    }

    response.code = 200
    response.message = 'Dados obtidos com sucesso.'
    
    return res.send(response)
     
})

// Get wallet
app.get('/wallet', async (req, res) => {
    
    let parTokken = req.query.tokken
    let login = ceiData[parTokken]
    
    ceiCrawler._username = login.user
    ceiCrawler._password = login.password

    let response = {
        code: null,
        message: '',
        data: {}
    }
    
    try {
        const wallet = await ceiCrawler.getWallet();
        response.data = wallet[0]
    } catch (err) {
        response.code = 200
        response.message = err.type
        return res.send(response)
    }

    response.code = 200
    response.message = 'Dados obtidos com sucesso.'
    
    return res.send(response)
     
})
// Start server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});




// const CeiCrawler = require('cei-crawler');
// // const { CeiErrorTypes } = require('cei-crawler')
// // import CeiCrawler from 'cei-crawler';

// const ceiCrawlerOptions = {
//     trace: false,
//     capEndDate: true,
//     navigationTimeout: 60000,
//     loginTimeout: 240000,

// };

// let ceiCrawler = new CeiCrawler('', '', ceiCrawlerOptions);
// ceiCrawler._username = '01035944936'
// ceiCrawler._password = 'GALAXYNote10#'

// ceiCrawler.login();


// // Start function
// const start = async function(a, b) {

//     let date = new Date('2021/02/08')
//     // let treasure = await ceiCrawler.getTreasures();
//     // let wallets = await ceiCrawler.getWallet(date);
//     let stockHistory = await ceiCrawler.getStockHistory();
//     // let dividends = await ceiCrawler.getDividends(date);
//     // console.log(treasure[0])
//     // console.log(wallets[0])
//     // console.log(stockHistory[0])
//     const stockHistoryOptions = await ceiCrawler.getStockHistoryOptions()
//     let result = stockHistory[0]
//     console.log(result)
//     // console.log(dividends[0])
// }

//   // Call start
//   start();