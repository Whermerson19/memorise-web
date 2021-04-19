import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  )
}