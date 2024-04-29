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

function CarAuctionItem({ auction }) {
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
                <p className="text-muted mb-4">أقل سعر مزايدة: ${auction.minimum_bid}</p> {/* Minimum Bid in Arabic */}
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>العلامة التجارية</span> {/* Brand in Arabic */}
                  <span>{auction.details?.brand || "غير متوفر"}</span> {/* N/A in Arabic */}
                </div>
                <div className="d-flex justify-content-between">
                  <span>الموديل</span> {/* Model in Arabic */}
                  <span>{auction.details?.model}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>سنة الصنع</span> {/* Manufacturing Year in Arabic */}
                  <span>{auction.details?.manufacturing_year}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>سنة التسجيل</span> {/* Registration Year in Arabic */}
                  <span>{auction.details?.registration_year}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>نوع المحرك</span> {/* Engine Type in Arabic */}
                  <span>{auction.details?.engine_type || "غير متوفر"}</span> {/* N/A in Arabic */}
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>سعر البداية</span> {/* Starting Bid in Arabic */}
                <span>${auction.minimum_bid}</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CarAuctionItem;
  