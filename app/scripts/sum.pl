use utf8;
use strict;
use warnings;
use List::Util qw(sum);

my $array = [1,2,3,4,5];

sub func { print sum(@_); }

func(@$array);
