import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

var AdminPage = React.createClass ({
    getInitialState() {
        return {
          STATE : 0,      /* STATE : 0 for 회원 관리, 1 for 건의사항 */
        };
    },
    componentDidMount(){
      //console.log("mounted");
      window.onpopstate = function(e){ //뒤로가기가 적용되면 이전 state로 돌아간다.
        if(e.state.STATE!=null){
          //console.log("pop: " + e.state);
           this.setState({
             STATE : e.state.STATE
           });
          }
      }.bind(this);

      window.history.replaceState({STATE:this.props.STATE},null,"/admin");
      //console.log(history.state.gnum);
    },
    state_change : function(num1){
      window.history.pushState({STATE:num1},null,"/admin");
      //console.log("push: " + num1 + " " + num2);
      // 히스토리를 수동적으로 집어넣어 url변경없이도 뒤로가기가 state변경만으로 이루어질수 있는 요건을 만들어줌.
      this.setState({        /* setState는 기존 state를 변경해주고 변경부분을 render해주는 훌륭한 함수 */
          STATE:num1
      });
    },
    render: function () {
        if(this.props.ADMIN == 1){
            return(
                <div>
                    권한이 없습니다!
                </div>
            );
        }
        else{
            var name=["회원 관리", "건의사항 보기"];
            return(
            <div className="container-fluid">
              <table style={{"width":"100%"}}>
                <tbody>
                  <tr>
                  <td className="body_forum_td1">
                    <div className="admin_left_container">

                        <div className="admin_left_name">
                          <h2>관리자 권한</h2>
                          <span className="body_forum_subtitle">King Diamond Spoon</span>
                        </div>

                        <div> {/*react는 함수를 만들고 this에 bind시켜야하므로, this와 인자를 bind함수로 받는다.*/}
                            <hr className="body_forum_line"/>
                            <div className="body_forum_menu" onClick={this.state_change.bind(this,0)}>
                                회원 관리
                            </div>
                            <hr className="body_forum_line"/>
                            <div className="body_forum_menu" onClick={this.state_change.bind(this,1)}>
                                건의사항 보기
                            </div>
                            <hr className="body_forum_line"/>
                        </div>
                     </div>
                  </td>
                  <td style={{"verticalAlign":"top"}}>
                    <div className="admin_right_container">
                        <div className="admin_right_name">
                            {name[this.state.STATE]}
                        </div>
                        내용 끌올해야함 여기다.
                    </div>
                  </td>
                  </tr>
                </tbody>
              </table>
          </div>
            );
        }
    }
});

let mapStateToProps = (state) => {
  return{
    ADMIN: state.Userinfo.admin
  };
}

AdminPage=connect(mapStateToProps)(AdminPage);

export default AdminPage;