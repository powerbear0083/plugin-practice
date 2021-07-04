import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import './Home.scss'

function Index() {
    return (
        <div className="home__wrap">
            Home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis, consequuntur dicta dolores ea eius eum hic id in libero modi molestiae nesciunt pariatur, quae repellendus reprehenderit soluta suscipit tenetur.
        </div>
    )
}


function FormBlock() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = e.currentTarget.checkValidity()
        setValidated(true)
        if(isValidated) {
            console.log('true',isValidated)
        } else {
            console.log('false',isValidated)
        }

    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                />
                <Form.Control.Feedback type="invalid">請輸入姓名</Form.Control.Feedback>
            </Row>
            <Button type="submit">確認送出</Button>
        </Form>
    )
}

function About() {
    return (
        <div className="about__wrap">
            about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam cumque dignissimos enim eos error esse fuga fugiat illo illum, iusto libero nesciunt nulla quaerat qui similique tenetur ullam vel.
        </div>
    )
}

function Home() {
    return (
        <Router>
            <div className="container">
                <ul className="d-flex">
                    <li className="p-2">
                        <NavLink exact activeClassName="active"  to="/">Home</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink activeClassName="active" to="/form">form</NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink activeClassName="active" to="/about">about</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/"  component={Index} />
                    <Route path="/form" component={FormBlock} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    )
}

export default Home;

