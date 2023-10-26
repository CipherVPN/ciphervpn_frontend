import React from 'react';
import Card, {CardVariant} from "./Components/Card";

const App = () => {
    return (
        <div>
          <Card onClick={() => console.log('click')} variant={CardVariant.primary} width={"200px"} height={"200px"}>
            <button>Button</button>
          </Card>
        </div>
    );
};

export default App;