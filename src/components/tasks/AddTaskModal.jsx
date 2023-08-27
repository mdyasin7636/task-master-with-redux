import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Redux is cool"> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sit cum soluta, rem dolor fugit, voluptatem tempore ipsum reprehenderit laborum rerum qui beatae veniam ipsa necessitatibus fugiat voluptatibus, quia blanditiis.</p> </Modal>
    );
};

export default AddTaskModal;