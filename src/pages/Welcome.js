import {Routes, Route} from 'react-router-dom'

const Welcome = () => {
    return (<section>
    <h1>The welcome page</h1>
    <Routes>
          <Route path="/user" element={<p>user</p>}/>
    </Routes>
    </section>);
};

export default Welcome;