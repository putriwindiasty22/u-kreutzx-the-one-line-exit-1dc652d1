# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/putriwindiasty22/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/putriwindiasty22/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for the [make.fun bounty "The One-Line Exit"](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1): the funniest single-line resignation letter, in 140 characters or fewer.

## The entry

> Dear Manager, I resign effective immediately: the printer has jammed for the last time, and frankly, so have I.

## Why this line

Every office worker has had a standoff with the printer, so the setup is instantly familiar — then the punchline turns the jammed machine into the narrator. The joke lands because the resignation is not about the salary, the boss, or the hours; it is about the one piece of equipment that pushed a perfectly reasonable person over the edge. It also works as a letter: it opens with "Dear Manager", states the resignation, and gives a reason — a ridiculous one, but a reason. It reads like something an actual employee could send at 4:59 pm on a Friday, and it is short enough to forward to a colleague.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`, falling back to `./output/entry.txt` when run locally. It refuses to write a blank line or one over the 140-character limit, and it reads the file back to verify the written text matches the intended line exactly.

```sh
node main.ts
```

## Referral

Built with [make.fun](https://make.fun/?ref=j9d1a2d9).

## License

MIT — see [LICENSE](LICENSE).
