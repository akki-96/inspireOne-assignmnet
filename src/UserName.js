import React from "react";
import UserTodo from "./UserTodo";
import "./styles.css";
import { makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import {
  Container,
  Grid,
  Typography,
  Card,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5)
  }
}));

export default function UserName({ user }) {
  const classes = useStyles();
  return (
    <div id="parent">
      <Container className={classes.root}>
        <div className="parent2">
          <div className="child">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="data:image/jpeg;base64,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"
                  style={{ height: 270 }}
                />
                <CardContent>
                  <Typography varient="h5">Name: {user.name} </Typography>
                  <Typography varient="subtitle1">
                    Email: {user.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Router>
                  <NavLink exact to="/usertodo">
                    User
                  </NavLink>
                  <Switch>
                    <Route exact path="/usertodo">
                      <UserTodo personId={user.id} />
                    </Route>
                  </Switch>
                </Router>
              </CardActions>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
