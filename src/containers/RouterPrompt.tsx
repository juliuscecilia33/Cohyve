import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Modal } from "antd";

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
      <Modal
        title={title}
        visible={showPrompt}
        onOk={handleOK}
        okText={okText}
        onCancel={handleCancel}
        cancelText={cancelText}
        closable={true}
      >
        There are unsaved changes. Are you sure want to leave this page ?
      </Modal>
    )
  );
}
