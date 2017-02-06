import React from 'react';
import '../../../node_modules/elemental/less/elemental.less';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'elemental';
import styles from './BreweryModal.css';

const BreweryModal = (props) => {
	if (!props.isOpen) {
		return null;
	}

	const brewery = props.brewery.brewery;
  
  return (
    <Modal isOpen={props.isOpen} onCancel={props.toggleModal} backdropClosesModal className={styles.container}>
      <ModalHeader text={brewery.name}  showCloseButton onClose={props.toggleModal} className={styles.title}  />
      <ModalBody className={styles.body}>
      	<img src={(brewery.images) ? brewery.images.squareMedium : ''} />
      </ModalBody>
      <ModalFooter>
      	<Button type="primary" onClick={props.toggleModal}>Close modal</Button>
      </ModalFooter>
    </Modal>
  );
};

export default BreweryModal;