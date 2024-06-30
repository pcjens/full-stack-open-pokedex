Let's consider a situation where a team of 6 people have built up an application
using Rust, and since the application will be released soon, it needs a CI/CD
pipeline.

Rust is an especially easy language to build a CI pipeline for, since it has
some widely praised official tooling. The `cargo` tool can be used to run lints,
tests, and most importantly, build the program. The linting is provided by the
previously less official, nowadays official tools `rustfmt` and `clippy`
(executed using the `cargo` subcommands `fmt` and `clippy`). In addition to the
regular build providing warnings, `clippy` detects patterns in the code and
suggests better ways to do it, often reducing, simplifying and otherwise making
code nicer, while (usually) not changing the semantics at all. Rustfmt is meant
more for aesthetics, as it checks (and automatically fixes) stylistic issues in
the code, such as indentation and breaking things up into their own lines.

What options are there for actually running the CI pipelines then? Aside from
Jenkins and GitHub Actions, there's GitLab's and Gitea's inbuilt systems that
work similarly to GitHub Actions, which allow a very similar experience to
GitHub, but self-hosted. There's also Drone, which is maybe more comparable to
Jenkins, and various forks of the previously mentioned solutions, such as
Woodpecker and Forgejo.

For a team of 6 people, if there's any interest in system administration, a
self-hosted solution may be a fitting solution, as the rent for a small VPS
needed for a build server is quite small, and this does give a lot of control of
the CI system to the team. On the other hand, a cloud-based CI system probably
wouldn't cost much (if anything) either, and would probably require basically no
maintenance work from the team, though then they are at the mercy of GitHub
updates and Microsoft's whims. For this small a team, I would call this more of
a question of values than an engineering one, at least if there's motivated
system admin(s) on the team.
