import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Prompt, ActionButton } from "../components";

interface DataProps {
  when?: any;
  onOK?: any;
  onCancel?: any;
  title?: any;
  okText?: any;
  cancelText?: any;
}

export function RouterPrompt({
  when,
  onOK,
  onCancel,
  title,
  okText,
  cancelText,
}: DataProps) {
  const history = useHistory();

  const [showPrompt, setShowPrompt] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (when) {
      history.block((prompt) => {
        setCurrentPath(prompt.pathname);
        setShowPrompt(true);
        return "true";
      });
    } else {
      history.block(() => {});
    }

    return () => {
      history.block(() => {});
    };
  }, [history, when]);

  const handleOK = useCallback(async () => {
    if (onOK) {
      const canRoute = await Promise.resolve(onOK());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
  }, [currentPath, history, onOK]);

  const handleCancel = useCallback(async () => {
    if (onCancel) {
      const canRoute = await Promise.resolve(onCancel());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
    setShowPrompt(false);
  }, [currentPath, history, onCancel]);

  console.log("router promoted shown: ", showPrompt);

  return (
    showPrompt && (
      <Prompt>
        <Prompt.Window>
          <Prompt.Top>
            <h2>
              There are <span>unsaved</span> changes. Do you still wish to leave
              this page?
            </h2>
          </Prompt.Top>
          <Prompt.Bottom>
            <ActionButton
              color="#FAFCFA"
              onClick={handleOK}
              background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
              disabled={false}
            >
              Yes
            </ActionButton>
            <ActionButton.Text
              color="#284B63"
              hoverColor="#AFD5AA"
              onClick={handleCancel}
              disabled={false}
            >
              No
            </ActionButton.Text>
          </Prompt.Bottom>
        </Prompt.Window>
      </Prompt>
    )
  );
}
