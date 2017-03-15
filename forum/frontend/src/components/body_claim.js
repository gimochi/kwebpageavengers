import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var BodyClaim = React.createClass ({

    render: function () {
        return(
           
            <div id="body_claim_container">
                <div className="body_claim_title">
                    건의사항
                </div>
                <div className="body_claim_textcontainer">
                    <textarea className="body_claim_text" placeholder="익명으로 전송됩니다"></textarea>
                </div>
                <div className="body_claim_sendbox">
                    <button type="button" id="body_claim_send" className="body_claim_sendbtn">보내기</button>
                </div>
            </div>
        );
    }
});

export default BodyClaim;