import React from 'react';
import ReactDOM from 'react-dom';

var DatgulList = React.createClass ({
    render: function () {
        return(
			<div className="datgul_list row">
				{/* 사진경로 이름 등급 시간 */}
				<div className="col-md-2 col-sm-2 col-xs-2">
					<div className="datgul_face">
					<img src={this.props.content[0]} className="img img-responsive img-circle" />
					</div>
				</div>
				<div className="col-md-10 col-sm-10 col-xs-10">
					<div className="row">
						<div className="datgul_name pull-left">{this.props.content[1]}</div>
						<div className="datgul_sujeo pull-left">{this.props.content[2]}</div>
						<div className="datgul_time pull-right">{this.props.content[3]}</div>
					</div>
					<div className="row datgul_content">
						<div className="col-md-12">
							{this.props.content[4]}
						</div>
					</div>
				</div>
			</div>
        );
    }
});

export default DatgulList;