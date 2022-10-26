import { createRef, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { getAllOpByAccount } from "../actions";
import OperationCard from "./OperationCard";

function OperationsSearch() {

    const accountNumberRef = createRef<HTMLInputElement>();
    const [operationsByAccount, setOperationsByAccount] = useState([]);
    const [getOp, setGetOp] = useState(false);

    const getAll = (e: any) => {
        getAllOpByAccount(Number(accountNumberRef.current?.value)).then(res => {
            setOperationsByAccount(res);
            setGetOp(true);

        })
    }



    return (
        <>
            <Form onSubmit={(e: any) => {
                e.preventDefault();
                getAll(e)
               
            }}>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Enter Account Number" ref={accountNumberRef} required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Get Operations History
                </Button>
            </Form>
            <br></br>
            {getOp ? <div className='row'>
                {operationsByAccount.map((o: any, i) => <OperationCard key={i} accountNumber={o.accountNumber} type={o.type} sum={o.sum} op_date={o.op_date} interest={o.interest} payments={o.payments} />)}
            </div>: <></>}
        </>
    )
}

export default OperationsSearch;