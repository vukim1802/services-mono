import { ExtendableProps, ModalClientProvider } from 'src/ModalClientProvider';

const Product = ({ price, closeModal }: ExtendableProps<{ price: number }>) => {
  console.log('closeModal', closeModal);
  console.log('price', price);
  return <></>;
};

const ProductsPage = () => {
  return (
    <>
      <ModalClientProvider.Modal />
      <ModalClientProvider.ModalHandler>
        {({ openModal, closeModal }) => {
          return (
            <button
              onClick={() => {
                openModal(
                  Product,
                  {
                    price: 100,
                  },
                  {
                    width: 1000,
                  }
                );
              }}
            >
              neso
            </button>
          );
        }}
      </ModalClientProvider.ModalHandler>
      <div>{/* some content */}</div>
      <div>{/* some content */}</div>
      <div>{/* some content */}</div>
      <div>{/* some content */}</div>
    </>
  );
};

export { ProductsPage };
