import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

function RealEstateAuctionItem({ auction }) {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6"> {/* Increase the column size to fit three items horizontally */}
          <MDBCard className="text-black">
            <MDBIcon icon="building" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={`http://localhost:8000/storage/${auction.image}`}
              position="top"
              alt={auction.name}
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{auction.name}</MDBCardTitle>
                <p className="text-muted mb-4">مزاد العقارات</p> {/* Real Estate Auction in Arabic */}
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>الدولة:</span> {/* Country in Arabic */}
                  <span>{auction.details.country}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>المدينة:</span> {/* City in Arabic */}
                  <span>{auction.details.city}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>المنطقة:</span> {/* Area in Arabic */}
                  <span>{auction.details.area}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>الحد الأدنى للمزايدة:</span> {/* Minimum Bid in Arabic */}
                <span>${auction.minimum_bid}</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RealEstateAuctionItem;
