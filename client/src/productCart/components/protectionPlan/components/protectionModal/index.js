import React from 'react';
import styles from './styles.scss';
import Button from 'components/button';
import Modal from 'components/modal';

const ProtectionModal = ({ showModal, onClose, product }) => {
  const {
    productName,
    productStars,
    productReviewCount,
    protectionPlanDescription,
  } = product;

  return (
    <Modal open={showModal} onClose={onClose}>
      <div className={styles.protection__description}>
        <div className={styles.protection__title}>
          <h4>Add to your order</h4>
        </div>
        <div className={styles.protection__left}>
          <h4>{productName}</h4>
          <div>{`${productStars} (${productReviewCount})`}</div>
          <p>{protectionPlanDescription}</p>
        </div>
        <div className={styles.protection__right}>
          <div className={styles.protection__buttons}>
            <Button>
              <span>Add plan</span>
            </Button>
            <Button>
              <span>No thanks</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProtectionModal;
