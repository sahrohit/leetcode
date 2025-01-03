class TrieNode {
    children: TrieNode | {};
    isWord: boolean;

    constructor() {
        this.children = {}
        this.isWord = false;
    }

    addWord(word: string) {
        let cur = this;
        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode()
            }
            cur = cur.children[c]
        }
        cur.isWord = true;
    }
}

function findWords(board: string[][], words: string[]): string[] {

    const root = new TrieNode()
    for (const word of words) {
        root.addWord(word)
    }

    const ROWS = board.length, COLS = board[0].length;
    const res = new Set(), visited = new Set()

    const backtrack = (r: number, c: number, word: string, node: TrieNode) => {
        if (r < 0 || c < 0 || r >= ROWS ||
            c >= COLS || !(board[r][c] in node.children) || visited.has(`${r}-${c}`)) { return false };

        visited.add(`${r}-${c}`)
        node = node.children[board[r][c]]
        word += board[r][c]

        if (node.isWord) {
            res.add(word)
        }

        backtrack(r + 1, c, word, node);
        backtrack(r - 1, c, word, node);
        backtrack(r, c + 1, word, node);
        backtrack(r, c - 1, word, node);

        visited.delete(`${r}-${c}`)
    };


    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            backtrack(r, c, "", root)
        }
    }

    return Array.from(res) as string[];
};



