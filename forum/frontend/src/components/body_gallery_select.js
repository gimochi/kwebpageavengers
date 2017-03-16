/**
 * Created by JongWoo on 2017-02-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery_Previews from './body_gallery_previews';
import GalleryDetail from './body_gallery_detail';

var GalleySelect = React.createClass({
    render: function(){
        if(this.props.STATE==0){
            return (
                <Gallery_Previews />
            );
        }
        else{
            return (
                <GalleryDetail />
            );
        }
    }
});


export default GalleySelect;