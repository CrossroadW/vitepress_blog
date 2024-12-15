```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
#include <atomic>

int sum = 0;
std::atomic<bool> a, b, turn;
const int len = 10000000;
void do_any() {
	for (int i = 0; i < len; i++) {
		a = 1;
		turn = 1;
		while (turn && b);
		sum++; // critical section
		a = 0;
	}
}
void do_bro() {
	for (int i = 0; i < len; i++) {
		b = 1;
		turn = 0;
		while (turn == 0 && a);
		sum++; // critical section
		b = 0;
	}
}
int main() {
	std::thread t1(do_any);
	std::thread t2(do_bro);
	t1.join();
	t2.join();
	std::cout <<  sum;
}

```

## 参考

[https://jyywiki.cn/OS/2024/slides/6.2.html#1](https://jyywiki.cn/OS/2024/slides/6.2.html#1).
[https://en.wikipedia.org/wiki/Peterson%27s_algorithm](https://en.wikipedia.org/wiki/Peterson%27s_algorithm)