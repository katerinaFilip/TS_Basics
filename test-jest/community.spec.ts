import axios from "axios";
import { Validator } from "jsonschema";
import superagent from "superagent"

describe("Test suite", () => {
    const schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "id": {
                "type": "integer"
            },
            "email": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            }
        },
        "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
        ]
    }

    test("Test", async () => {
        let response: any;
        const v = new Validator();

        try {
            response = await superagent.get('https://reqres.in/api/users').query({ id: 2 });
        }
        catch (err: any) {
            console.log(err.message);
        }
        expect(response.status).toBe(200);
        expect(v.validate(response.body.data, schema).valid).toBeTruthy();
    })

    test.only("Test 1", async () => {
        const response = await axios.post('https://reqres.in/api/users', { name: 'James', job: 'manager' });
        expect(response.status).toBe(201);
        expect(response.data.createdAt).toBe(new Date());
    })

})