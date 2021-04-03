# kApp
App component KaabeApp


```graphql
// Service provider entry.
ServiceProvider
{
    int id
    string guid
    Currency currency
    BusinessType businessType
    ServiceLevel serviceLevel
    string name
    string description
    string phoneNumber
    string website
    string configuration
    string city
    string location
    double Latitude
    double Longitude
    string picture
}

// Category.
Category {
    int id
    string guid
    string name
    string description
}

// Menu item.
MenuItem {
    int id
    string guid
    string name
    string description
    MenuItemStatus status
    int itemCategoryId
    double saleUnitPrice
    string picture
}

// Order item.
Order {
    int id
    string guid
    string createdAt
    OrderStatus status
    int orderNumber
    string tableNumber
    string customerName
    string customer_notes
    string additional_info
    string order_rows
}

// Pagination information.
PaginationInfo {
    int pageIndex
    int pageSize
    int resultCount
    int totalCount
    int pagesCount
}

// Order status.
enum OrderStatus {
  CREATED = 0;
  INQUEUE = 1;
  PREPARING = 2;
  READY = 3;
  INTERRUPTED = 4;
  DELETED = 5;
}

// Menu item status.
enum MenuItemStatus {
  DRAFT = 0;
  PUBLISHED = 1;
  UNPUBLISHED = 2;
}

// Currency.
enum Currency {
  Dollar = 0;
  SomalilandShilling = 1;
  SomaliShilling = 2;
  Frangi = 3;
  KenyaShilling = 4;
  Birr = 5;
}

// Business type.
enum BusinessType {
  Restaurant = 0;
  Cafe = 1;
  Hotel = 2;
}

// Service level.
enum ServiceLevel {
  Basic = 0;
  Standard = 1;
  Premium = 2;
}
```
