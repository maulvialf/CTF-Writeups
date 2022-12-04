#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <iostream>
#include <cstdlib>
#include <cerrno>
#include <cstring>

int main(int argc, char* argv[]){
	unsigned long long x = atoll(argv[1]);
	srand(x);
	for (int i = 0; i <= 63; i++)
	{
		unsigned int test = rand();
		printf("%d\n", test % 256);
	}
}
