import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Paginate = ({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate,
  previousPage,
  nextPage,
}: {
  currentPage: number;
  productsPerPage: number;
  totalProducts: number;
  paginate: any;
  previousPage: any;
  nextPage: any;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={(e) => {
            e.preventDefault();
            previousPage;
          }}
        >
          <PaginationPrevious
            href="#"
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={
              currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem
            key={number}
            onClick={(e) => {
              e.preventDefault();
              paginate(number);
            }}
          >
            <PaginationLink
              href="#"
              isActive={currentPage === number ? true : false}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          onClick={(e) => {
            e.preventDefault();
            nextPage;
          }}
        >
          <PaginationNext
            href="#"
            aria-disabled={
              currentPage >= Math.ceil(totalProducts / productsPerPage)
            }
            tabIndex={
              currentPage >= Math.ceil(totalProducts / productsPerPage)
                ? -1
                : undefined
            }
            className={
              currentPage >= Math.ceil(totalProducts / productsPerPage)
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
