import React from 'react';
import ReactDOM from 'react-dom';

var PostContent = React.createClass({
  render: function(){
    return(
        <div className = "postview_postcontent_container">
          <div className = "postview_postcontent_titlebox">
            <div className = "postview_postcontent_titlebox_left pull-left">
              <table>
                <tr>
                  <td>
                    <span className = "postview_postcontent_titlebox_head">제목</span>
                  </td>
                  <td>
                    <span className = "postview_postcontent_titlebox_boardname">&nbsp;&nbsp;게시판이름</span>
                  </td>
                </tr>
              </table>
            </div>
            <div className ="postview_postcontent_titlebox_right pull-right">
              <table>
                <tr>
                  <td>
                    <span>1111.01.01. 11:11</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className = "postview_postcontent_profilebox pull-left">
            <div className = "postview_postcontent_profilecard">
              <table>
                <tr>
                  <td>
                    <img className = "postview_postcontent_profilebox_sujeo" src = "../static/data/sujeo/gold.png"/>
                    <span className = "postview_postcontent_profilebox_username">&nbsp;윤깐식</span>
                  </td>
                  <td>
                    <span className = "postview_postcontent_profilebox_email">&nbsp;&nbsp;yoonhs96@gmail.com</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className = "postview_postcontent_contentbox pull-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ante laoreet, pulvinar orci id, tincidunt purus. Curabitur turpis ligula, mollis sit amet sodales a, finibus aliquet nunc. Cras tempor quis urna a congue. Donec turpis diam, placerat sed nisi eget, cursus interdum nisl. Pellentesque fringilla ornare augue, a rhoncus ipsum tincidunt vel. Quisque hendrerit convallis tempus. Pellentesque vitae fermentum mi, quis pretium sapien. Donec a tellus est. Nullam dignissim aliquam tellus, non efficitur est laoreet ac. Aenean vehicula tempor augue.

Pellentesque et feugiat mauris. Nullam sed tellus quis quam pellentesque pulvinar dictum vel odio. Phasellus feugiat arcu dapibus dapibus iaculis. Nulla vel commodo sapien. Sed nec mauris gravida, consequat leo ac, scelerisque lorem. Vivamus in diam porttitor, eleifend eros eu, imperdiet lectus. Ut nec porttitor urna. Cras cursus accumsan elementum. Ut consequat nibh at justo cursus, quis hendrerit risus gravida. Nulla nulla est, cursus at vestibulum sed, commodo ac sem. Nunc maximus efficitur libero, a maximus dolor lobortis consequat.

Phasellus dictum lorem ut dolor imperdiet, vel consectetur purus feugiat. Ut tincidunt felis at enim maximus, feugiat ultrices ex feugiat. Duis tortor elit, auctor eu mollis vitae, hendrerit ut est. Praesent eget velit vel lectus ullamcorper euismod quis vehicula orci. Vivamus lacus augue, venenatis ut finibus a, mattis id quam. Aliquam aliquam blandit felis. Sed in mattis augue. In dictum nulla tortor, eget volutpat lacus pretium nec. Aenean vel consequat lacus. Vestibulum fermentum gravida pellentesque. Fusce vulputate ullamcorper ex quis aliquet. Quisque pulvinar metus in nunc tempus placerat.

Fusce gravida leo quis felis semper, vel posuere tortor lacinia. Vivamus laoreet in felis vel scelerisque. Praesent iaculis nisl eget imperdiet sodales. Sed at ex eu lacus feugiat pulvinar sed nec ipsum. Mauris vehicula at ligula nec eleifend. Duis quam erat, vulputate sit amet imperdiet posuere, blandit sit amet enim. Morbi non faucibus nulla. Curabitur vel dui non nulla aliquam feugiat. Quisque blandit volutpat lorem, non luctus ipsum congue nec. Sed arcu elit, placerat id malesuada ut, scelerisque ac mi. Etiam ullamcorper nunc at ante pharetra, volutpat pharetra elit tempus.

Etiam sed tincidunt nulla. Aenean vel urna a enim placerat euismod nec quis nulla. Nunc ullamcorper sit amet velit laoreet dapibus. Sed ac tempor est. Vestibulum consequat nulla ornare est semper semper. Suspendisse sed eleifend urna. Quisque dictum pharetra nisl nec iaculis.
          </div>
          <div className = "postview_postcontent_controlbox">
            <div className = "postview_postcontent_controlbox_prev pull left">
              <div className = "postview_postcontent_controlbox_prev_left pull-left">
                <table>
                  <tr>
                    <td>
                      <span>△이전글</span>
                    </td>
                    <td>
                      <span>&nbsp;&nbsp;제목</span>
                    </td>
                  </tr>
                </table>
              </div>
              <div className = "postview_postcontent_controlbox_prev_right pull-right">
                <table>
                  <tr>
                    <td>
                      <img className = "postview_postcontent_profilebox_sujeo" src = "../static/data/sujeo/gold.png"/>
                      <span className = "postview_postcontent_profilebox_username">&nbsp;윤깐식</span>
                      &nbsp;&nbsp;
                    </td>
                    <td>
                      <span>1111.01.01. 11:11</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className = "postview_postcontent_controlbox_next pull-right">
              <div className = "postview_postcontent_controlbox_next_left pull-left">
                <table>
                  <tr>
                    <td>
                      <span>▽다음글</span>
                    </td>
                    <td>
                      <span>&nbsp;&nbsp;제목</span>
                    </td>
                  </tr>
                </table>
              </div>
              <div className = "postview_postcontent_controlbox_next_right pull-right">
                <table>
                  <tr>
                    <td>
                      <img className = "postview_postcontent_profilebox_sujeo" src = "../static/data/sujeo/gold.png"/>
                      <span className = "postview_postcontent_profilebox_username">&nbsp;윤깐식</span>
                      &nbsp;&nbsp;
                  </td>
                    <td>
                      <span>1111.01.01. 11:11</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

export default PostContent;
