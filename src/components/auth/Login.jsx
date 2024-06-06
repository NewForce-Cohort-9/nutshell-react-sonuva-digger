import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../services/userService";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export const Login = () => {
  const [email, set] = useState("charlie@charliesemail.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            id: user.id,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="login">
      <Card
        className="my-2 text-center"
        color="light"
        style={{
          width: "50rem",
        }}
      >
        <CardHeader className="p-3">Sonuva Digger</CardHeader>
        <CardBody className="p-4">
          <CardTitle tag="h5">Please sign in</CardTitle>
          <Form onSubmit={handleLogin}>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email"
                required
              />

              <Label for="exampleEmail">Email</Label>
            </FormGroup>
            <Button color="primary" type="submit">
              Sign in
            </Button>
          </Form>
          <hr></hr>
          <Link to="/register">Not a member yet?</Link>
        </CardBody>
      </Card>
    </main>
  );
};
