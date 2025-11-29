import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://prod-cdn.pharmacity.io/e-com/images/landing-pages/20251107084545-0-lpdt.png?versionId=LoeZzO9SBmGQZHfFF3Qio_rP6kynOrqp" height={500} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://production-cdn.pharmacity.io/digital/original/plain/blog/BANNER-thu-cu-doi-moi-but-tiem-insulin-4-1.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUYXZVMJM5QUYWSVO%2F20250814%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250814T083533Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=2cafb31334b4a192ea064bde768d2879e49f8ba71a5f0df4092702df27644608" height={500} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://prod-cdn.pharmacity.io/e-com/images/landing-pages/20250806090630-0-Desk.png?versionId=a6_2YBvN3Wu5e_z3CEZUfXZNqiWW49MO" height={500} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://production-cdn.pharmacity.io/digital/389x0/plain/e-com/images/banners/20250513024810-0-389x143-sub.png?versionId=BXtOBlz3nxYP6iHcXjIhDq5qMmuBK1ku" height={500} alt="Four slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://production-cdn.pharmacity.io/digital/389x0/plain/e-com/images/banners/20251120024630-0-sub-herbal.png?versionId=EAb84rumSa3sNkj_fxGcI8kJpRgOyCLV" height={500} alt="Four slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;