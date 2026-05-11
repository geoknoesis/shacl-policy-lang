# SHACL Policy Language (SPL)

SPL is a **profile of [W3C SHACL 1.2](https://w3c.github.io/shacl/)** for access-control rules over RDF access-request graphs and [Verifiable Credentials](https://www.w3.org/TR/vc-data-model-2.0/). This repository holds the **editor's draft** specification, the normative `shpl:` vocabulary (`spl.ttl`), SHACL-for-SHACL validation (`spl-spl.ttl`), a JSON-LD context (`spl-context.jsonld`), and a starter conformance corpus under `tests/`.

## Published snapshot

- **Human-readable spec:** open [`index.html`](index.html) in a browser (loads [ReSpec](https://respec.org/) from `respec-config.js`), or use the hosted editor's draft URI configured in `respec-config.js` (`edDraftURI`). To validate the document locally without a browser UI, run `npx respec index.html out.html -e -w` (fails on ReSpec errors or warnings; allow time for first-time package download).
- **Vocabulary namespace:** `https://w3id.org/shacl-policy-language#` (`shpl:`)
- **Normative spec version IRI (v0.3.0):** `https://w3id.org/shacl-policy-language/spec/v0.3.0`

## Repository layout

| Path | Role |
|------|------|
| `index.html` | ReSpec specification: normative sections, examples, appendices A–G (conventions and acknowledgements) |
| `respec-config.js` | ReSpec metadata (title, editors, bibliography) |
| `spl.ttl` | OWL/RDFS vocabulary and term documentation |
| `spl-spl.ttl` | SPL-SPL: SHACL shapes validating SPL policies and related graphs |
| `spl-context.jsonld` | Non-normative JSON-LD compact IRIs for APIs |
| `tests/` | Example policies, requests, manifests, expected decisions (see Appendix D for minimum runner expectations) |

## Contributing

Use the [issue tracker](https://github.com/geoknoesis/shacl-policy-lang/issues) for substantive feedback, errata, and implementation notes. Pull requests should keep examples, `spl.ttl`, `spl-spl.ttl`, and `index.html` aligned when vocabulary or shapes change.

## License

Specification text and supporting artifacts in this repository are licensed under **CC BY 4.0** (see [`LICENSE`](LICENSE)).
