import { PureComponent } from 'react';
class PureComp extends PureComponent {
    render() {
        console.log("Pure Component is rendered");
        return (
            <>
                <h1> This is Pure Component</h1>
            </>
        );
    }
}
export default PureComp;