import React, { useEffect, useState, useCallback } from "react";
import { Widget } from "near-social-vm";
import { useQuery } from "../hooks/useQuery";
import { useHashUrlBackwardsCompatibility } from "../hooks/useHashUrlBackwardsCompatibility";
import useRedirectMap from "../hooks/useRedirectMap";

export default function ViewPage(props) {
  const [shouldWaitForMap, redirectMap, loaderError, loaderUrl] =
    useRedirectMap();

  const query = useQuery();
  const [widgetProps, setWidgetProps] = useState({});

  useHashUrlBackwardsCompatibility();

  useEffect(() => {
    setWidgetProps(Object.fromEntries([...query.entries()]));
  }, [query]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {loaderUrl && (
          <div
            style={{
              backgroundColor: "#FFF2CD",
              color: "#664D04",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "2rem",
              columnGap: "8px",
            }}
          >
            <span>Loading components from: {loaderUrl}</span>
            {props.flags?.bosLoaderUrl && (
              <button
                className="btn btn-outline"
                onClick={() => props.setFlags?.({ bosLoaderUrl: null })}
              >
                <i className="bi bi-x" />
              </button>
            )}
          </div>
        )}
        {loaderError && (
          <div style={{ padding: "16px" }}>
            BOS Loader fetch error, see console logs. CORS errors may be
            misleading and mean your endpoint cannot be reached
          </div>
        )}
        <div className="container-xl">
          <div className="row">
            <div
              className="d-inline-block position-relative overflow-hidden pt-4"
            >
              {(!shouldWaitForMap || redirectMap) && (
                <div>
                  <Widget
                    config={{ redirectMap: redirectMap }}
                    src={props.src}
                    props={widgetProps}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
