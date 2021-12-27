const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

//if everything is working, the test should pass
describe('success json result should be:', () => {
    jest.setTimeout(30000);
    it('should return a json object', async () => {
        const response = await request.post('/api/report').send({
            "startDate": "2016-01-01",
            "endDate": "2017-10-02",
            "minCount": 2700,
            "maxCount": 3000
          });

        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        
    });
})

//if the request is not valid, the test should fail
describe('error json result should be:', () => {
    jest.setTimeout(30000);
    it('should return a json object', async () => {
        const response = await request.post('/api/report').send();

        expect(response.status).toBe(500,400);
        expect(response.type).toBe('application/json');
        
    });
})