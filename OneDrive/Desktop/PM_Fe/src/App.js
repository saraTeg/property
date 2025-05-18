import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

import LandingPage  from "./Pages/LandingPage"
import AuthPages from "./Pages/AuthPages"
import Layout from './Layouts/Layout';
import Dashboard from './Pages/Dashboard';
import PropertyList from './Components/Property/PropertyList';
// import LeaseList from './Components/Leases/LeaseList';
import RentalHistory from './Pages/RentalHistory';
import Notifications from "./Pages/Notifications";
import Payments from './Pages/Payments';
import AuditLogs from './Pages/AuditLogs';
import UserList from './Pages/UserList';
import TenantList from "./Components/Tenant/TenantList"
import TenantPropertyList from "./Components/Property/TenantPropertyList"
import TenantLayout from "./Layouts/TenantLayout"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/pm/v1/landingpage" />
        </Route>
        <Route path="/pm/v1/landingpage" component={LandingPage} />
        <Route path={['/pm/v1/login', '/pm/v1/signup', '/pm/v1/forgot-password']} component={AuthPages} />
       
        <TenantLayout>
          <Route exact path="/pm/v1/tenants" component={TenantPropertyList} />
        </TenantLayout> 
        
        {/* Admin Routes */}
        <Layout>
          <Route exact path="/pm/v1/propease" component={Dashboard} />
          <Route path="/pm/v1/propease/properties"  component={PropertyList} />
          {/* <Route path="/pm/v1/propease/leases" component={LeaseList} /> */}
          <Route path="/pm/v1/propease/rental-history" component={RentalHistory} />
          <Route path="/pm/v1/propease/notifications" component={Notifications} />
          <Route path="/pm/v1/propease/payments" component={Payments} />
          <Route path="/pm/v1/propease/audit-logs" component={AuditLogs} />
          <Route path="/pm/v1/propease/users" component={UserList} />
          <Route path="/pm/v1/propease/tenants" component={TenantList} />
        </Layout>


      </Switch>
    </div>
  );
}
export default App;
