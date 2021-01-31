import React, { useState } from 'react';
import { Button, Card, CardBody } from 'reactstrap';

const endpoint = "tu_endpoint_api";

export default function TodoManager() {

    const [data, setData] = useState([])

    const getSrvc = async () => {
        let result = await fetch(endpoint);
        result = await result.json();
        console.log("getSrvc@result", result)
        setData( result.data );
    }
    
    const getDetailSrvc = async () => {
        let result = await fetch(`${endpoint}/1`);
        result = await result.json();
        console.log("getDetailSrvc@result", result)
        setData( result.data );
    }
    
    const createSrvc = async () => {
        let result = await fetch(`${endpoint}`, {
            method: "POST",
            body: JSON.stringify({
                "name": "Despliegue de services",
                "responsible": "Manuel"
            })
        });
        result = await result.json();
        console.log("getDetailSrvc@result", result)
        setData( result.data );
    }
    
    const updateSrvc = async () => {
        let result = await fetch(`${endpoint}/1`, {
            method: "PUT",
            body: JSON.stringify({
                "name": "Despliegue de services 2",
                "responsible": "LUIS"
            })
        });
        result = await result.json();
        console.log("updateSrvc@result", result)
        setData( result.data );
    }
    
    const deleteSrvc = async () => {
        let result = await fetch(`${endpoint}/1`, {
            method: "DELETE"
        });
        result = await result.json();
        console.log("deleteSrvc@result", result)
        setData( result.data );
    }

    return (
        <div className="container-md mt-20">

            <div className="row">
                <div className="col-4 border-right">
                    <div className="row">
                        <div className="container" >
                            <Button color="primary" onClick={getSrvc}>
                                GET
                            </Button>
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="container" >
                            <Button color="secondary" onClick={getDetailSrvc}>
                                GET DETAIL
                            </Button>
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="container" >
                            <Button color="success" onClick={createSrvc}>
                                CREATE
                            </Button>
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="container" >
                            <Button color="info" onClick={updateSrvc}>
                                UPDATE
                            </Button>
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="container" >
                            <Button color="warning" onClick={deleteSrvc}>
                                DELETE
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <Card>
                        <CardBody className="text-left">
                            <pre>
                                { JSON.stringify(data, null, 2) }
                            </pre>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    )

}
