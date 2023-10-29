import React, { FC } from "react";
import { Button, Container,  } from "react-bootstrap";

interface Props {
  src: string;
  header?: string;
  description?: string;
  button: string;
}
export const Video: FC<Props> = (props) => {
  return (
    <section className="video-session">
      <Container>
        <div>
          <video
           controls
            src={props.src}
            className="rounded-5"
            style={{ width: "100%" }}
          />
        </div>

        <div className="video-session-text-side ">
          <div className="text-center">
            <p className="fw-bold text-primary fs-1">{props.header}</p>
            <p className="">{props.description}</p>
          </div>
          <div className="text-center">
            <Button variant="secondary px-5 text-white" className="">
              {" "}
              {props.button}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
