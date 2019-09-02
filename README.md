# choose_postion

This a system for choosing position.

### Demand
1. two ways to choose seat
2. opened at specific time
3. statistics
4. recommend

### logic
1. You can't choose the same seat every two month
2. First come, first get
3. If you choose your top three preference, the system will look for the seat in sequence.
4. If you choose area, the system will assign a seat for you randomly.

### database design
table seat
1. id
2. name
3. seat
4. area
5. status
6. lock_time
7. lock_person
8. month

table area
1. area_id
2. area_name
3. create_time
4. change_time

table user?