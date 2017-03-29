import React from 'react';
import ReactDOM from 'react-dom';

var DatgulList = React.createClass ({
    render: function () {
        var sujeo;

        if (this.props.content[2] == "은수저"){
			sujeo="../static/data/sujeo/silver.png";
        }
        else if (this.props.content[2] == "금수저"){
            sujeo="../static/data/sujeo/gold.png";
        }
        else{ //흙수저일때.
            sujeo="../static/data/sujeo/sand.png";
        }
        return(
			<div className="datgul_list">
				{/* 사진경로 이름 등급 시간 */}
				<div className="col-md-1 col-sm-1 col-xs-3 datgul-left">
					<div className="datgul_face">
					<img src={this.props.content[0]} className="img img-responsive img-circle" />
					</div>
				</div>
				<div className="col-md-11 col-sm-11 col-xs-9 datgul-right">
					<div className="datgul_info col-md-12 col-xs-12">
						<div className="datgul_sujeo pull-left"><img src={sujeo} className="img-responsive" alt={this.props.content[2]}  /></div>
						<div className="datgul_name pull-left"><a href="/userinfo">{this.props.content[1]}</a></div>
						<div className="datgul_time pull-left"><p className="text-muted">{this.props.content[3]}</p></div>
					</div>
					<div className="datgul_content col-md-12 col-xs-12">
                        {this.props.content[4]}
					</div>
					<div className="datgul_like col-md-12 col-xs-12">
						<p className="pull-left"><strong className="text-success">&nbsp;3&nbsp;</strong><strong className="text-danger">&nbsp;1&nbsp;</strong></p>
						<p className="pull-right"><a href="javascript:void(0);" className="glyphicon glyphicon-thumbs-up">좋아요</a>&nbsp;&nbsp;<a href="javascript:void(0);" className="glyphicon glyphicon-thumbs-down">응꺼져</a></p>
					</div>
				</div>
			</div>
        );
    }
});

export default DatgulList;