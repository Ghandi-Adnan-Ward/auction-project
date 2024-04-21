import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";

function OtherAuctionItem({ auction }) {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBCardImage
              src={`http://localhost:8000/storage/${auction.image}`}
              position="top"
              alt={auction.name}
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{auction.name}</MDBCardTitle>
                <p className="text-muted mb-4">{auction.description}</p> {/* Description in Arabic */}
              </div>
              <div className="d-flex justify-content-between">
                <span>أقل سعر مزايدة</span> {/* Minimum Bid in Arabic */}
                <span>${auction.minimum_bid}</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OtherAuctionItem;
