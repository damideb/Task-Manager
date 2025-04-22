import React, { SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";


const GenericModal = ({
  openModal,
  setOpenModal,
  title,
  children,
  modalWidth = "sm:max-w-2xl sm:max-h-[637px]",
  subtitle
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  modalWidth?: string;
  subtitle?:string

}) => {


  const handleClose = () => {
    setOpenModal(false);
  
  };

  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        aria-hidden="true"
        className={`fixed inset-0 bg-black/25 transition-opacity duration-500 ${
          openModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div
            className={`relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:w-full ${modalWidth} p-5 sm:px-8 sm:py-6`}
          >
            <div className=" mb-6">
              <div className="flex justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {title}
                </h2>

                <div
                  className={`size-9 rounded-full grid place-content-center`}
                >
                  <IoMdClose
                    className="h-6 w-6 cursor-pointer "
                    onClick={handleClose}
                  />
                </div>
              </div>
              <p className=" text-black/70">{subtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
