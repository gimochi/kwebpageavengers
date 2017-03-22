import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

function body_claim_alert (){
    alert("건의사항이 전송되었습니다. 감사합니다.");
}

var BodyClaim = React.createClass ({

    render: function () {
        return(
           
            <div id="body_claim_container">
                <div className="body_claim_title">
                    건의사항
                </div>
                <div className="body_claim_textcontainer">
                    <textarea id="body_claim_text" placeholder="익명으로 전송됩니다"></textarea>
                </div>
                <div className="body_claim_sendbox">
                    <button type="button" id="body_claim_send" className="body_claim_sendbtn" onClick={body_claim_alert}>보내기</button>
                </div>
            </div>
        );
    }
});

export default BodyClaim;