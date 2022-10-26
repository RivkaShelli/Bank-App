import { Card } from "react-bootstrap";

function OperationCard(props: any) {
    return (
        <>
            <br></br>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Operation In {props.accountNumber}</Card.Title>
                    <Card.Text>
                        Operation Type: {props.type}
                    </Card.Text>
                    <Card.Text>
                        Sum : {props.sum} <span>&#8362;</span>
                    </Card.Text>
                    <Card.Text>
                        Date : {props.op_date.split('T')[0]}
                    </Card.Text>
                    {props.type == 'loan' ? <Card.Text>
                        Interest : {props.interest} %
                        <br></br>
                        Payments : {props.payments}
                    </Card.Text>: <></>}
                 
                </Card.Body>
            </Card>
        </>
    )
}

export default OperationCard;