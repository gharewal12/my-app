import React from 'react';
function MemoComp(props) {
    console.log("Memo Component is rendered");
    return (
        <div>
            <h3> This is Memo Component</h3>
        </div>
        )
}
export default React.memo(MemoComp);