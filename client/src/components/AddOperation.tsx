import { createRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { addOp } from "../actions";

function AddOperation() {


    let accountRef = createRef<HTMLInputElement>();
    let sumRef = createRef<HTMLInputElement>();
    let interestRef = createRef<HTMLInputElement>();
    let paymentsRef = createRef<HTMLInputElement>();
    const [type, setType] = useState<any>('');

    const [add, setAdd] = useState<any>(false);

    function buildOp() {

        let interest:any = interestRef.current?.value;
        let payments:any = paymentsRef.current?.value;
        if (type != 'loan') {
            interest = null;
            payments = null;
        }

        const bodyObj = {
            accountNumber: accountRef.current?.value,
            type: type,
            sum: sumRef.current?.value,
            op_date: new Date(),
            interest: interest ,
            payments: payments
        }
        return bodyObj;
    }

    return (
        <>
            <h1>Perform a new action</h1>
            <Form onSubmit={(e) => {
                e.preventDefault();
                addOp(e, buildOp).then(res=> setAdd(true));
            }}>
                <Form.Group className="mb-3" >
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Account Number" ref={accountRef} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Operation Type</Form.Label>
                    <Form.Select onChange={(e) => {
                        e.preventDefault();
                        setType(e.target.value);
                    }} required>
                        <option>Choose Type</option>
                        <option value="pull">Pull</option>
                        <option value="deposit">Deposit</option>
                        <option value="loan">Loan</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Sum</Form.Label>
                    <Form.Control type="number" placeholder="Sum" ref={sumRef} required />
                </Form.Group>
             
                {type == 'loan' ? <>
                    <Form.Group className="mb-3" >
                        <Form.Label>Interest</Form.Label>
                        <Form.Control type="number" placeholder="Interest" ref={interestRef} required />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Payments</Form.Label>
                        <Form.Control type="number" placeholder="Payments" ref={paymentsRef} required />
                    </Form.Group>
                </>
                    : <></>}
                
                <Button variant="dark" type="submit">
                    Performing the action
                </Button>
            </Form>
            {add ? <Navigate to="/" /> : <></>}
        </>
    )
}

export default AddOperation;