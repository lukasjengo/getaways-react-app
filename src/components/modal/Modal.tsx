import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal } from 'redux/modal/modalActions';

import ModalForm from './ModalForm';

import { ModalOverlay } from './styles';
import { AppState } from 'redux/root-reducer';

const Modal: React.FC = () => {
  const visible = useSelector((state: AppState) => state.modal.visible);
  const dispatch = useDispatch();
  const modalNode = useRef(null);

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    //eslint-disable-next-line
  }, [visible]);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalNode.current === e.target) {
      // outside click
      dispatch(hideModal());
    }
  };

  return visible ? (
    <ModalOverlay ref={modalNode}>
      <ModalForm />
    </ModalOverlay>
  ) : null;
};

export default Modal;
