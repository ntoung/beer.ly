import React from 'react';
import '../../../node_modules/elemental/less/elemental.less';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'elemental';
import styles from './BeerItemModal.css';

const BeerItemModal = (props) => {
	if (!props.isOpen) {
		return null;
	}
  
  return (
    <Modal isOpen={props.isOpen} onCancel={props.toggleModal} backdropClosesModal className={styles.container}>
      <ModalHeader text={props.beer.name}  showCloseButton onClose={props.toggleModal} className={styles.title}  />
      <ModalBody className={styles.body}>
      	<img src={props.beer.image} />
      </ModalBody>
      <ModalFooter>
      	<Button type="primary" onClick={props.toggleModal}>Close modal</Button>
      </ModalFooter>
    </Modal>
  );
};

export default BeerItemModal;