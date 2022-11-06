export type ZeroOneFewMany = {
    one: string;
    few: string;
    many: string;
};

export const czechPluralization = (
    count: number,
    { one, few, many }: ZeroOneFewMany,
): string => {
    switch (true) {
        case count === 1:
            return one;

        case [2, 3, 4].includes(count):
            return few;

        default:
            return many;
    }
};
