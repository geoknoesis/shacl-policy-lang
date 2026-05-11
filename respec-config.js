var respecConfig = {
  specStatus: "unofficial",
  shortName: "shacl-policy-language",
  edDraftURI: "https://geoknoesis.github.io/shacl-policy-lang/index.html",
  title: "SPL v0.3 — SHACL Policy Language",
  subtitle: "RDF access policies, shape-backed conditions, portable Decision graphs, VC-aware evaluation (v0.3 editor's draft)",
  publishDate: "2026-05-11",
  bugTracker: {
    url: "https://github.com/geoknoesis/shacl-policy-lang/issues/",
  },
  editors: [
    {
      name: "Stephane Fellah",
      company: "Geoknoesis LLC",
      companyURL: "https://www.geoknoesis.com",
      url: "https://www.geoknoesis.com",
    }
  ],
  github: "https://github.com/geoknoesis/shacl-policy-lang",
  testSuiteURI: "https://github.com/geoknoesis/shacl-policy-lang/tree/main/tests",
  implementationReport: "https://github.com/geoknoesis/shacl-policy-lang/issues",
  // localBiblio entries override SpecRef and are used when SpecRef has no entry.
  localBiblio: {
    "VC-DATA-MODEL": {
      title: "Verifiable Credentials Data Model v2.0",
      href: "https://www.w3.org/TR/vc-data-model-2.0/",
      status: "REC",
      publisher: "W3C",
    },
    "VC-BITSTRING-STATUS-LIST": {
      title: "Verifiable Credentials Bitstring Status List",
      href: "https://www.w3.org/TR/vc-bitstring-status-list/",
      status: "WD",
      publisher: "W3C",
    },
    "VC-DATA-INTEGRITY": {
      title: "Verifiable Credential Data Integrity",
      href: "https://www.w3.org/TR/vc-data-integrity/",
      status: "REC",
      publisher: "W3C",
    },
    "RFC9421": {
      title: "HTTP Message Signatures",
      href: "https://www.rfc-editor.org/rfc/rfc9421",
      date: "February 2024",
      status: "Proposed Standard",
      publisher: "IETF",
    },
    "XPATH-FUNCTIONS": {
      title: "XPath and XQuery Functions and Operators 3.1",
      href: "https://www.w3.org/TR/xpath-functions-31/",
      status: "REC",
      publisher: "W3C",
    },
    "SHACL12-CORE": {
      title: "SHACL 1.2 Core",
      href: "https://w3c.github.io/shacl/shacl-core/",
      status: "ED",
      publisher: "W3C",
    },
    "SHACL12-RULES": {
      title: "SHACL 1.2 Rules",
      href: "https://w3c.github.io/shacl/shacl-rules/",
      status: "ED",
      publisher: "W3C",
    },
    "SHACL12-NODE": {
      title: "SHACL 1.2 Node Expressions",
      href: "https://w3c.github.io/shacl/shacl-node-expressions/",
      status: "ED",
      publisher: "W3C",
    },
    "SHACL12-SPARQL": {
      title: "SHACL 1.2 SPARQL Extensions",
      href: "https://w3c.github.io/shacl/shacl-sparql/",
      status: "ED",
      publisher: "W3C",
    },
    "ODRL": {
      title: "ODRL Information Model 2.2",
      href: "https://www.w3.org/TR/odrl-model/",
      status: "REC",
      publisher: "W3C",
    },
    "RFC2119": {
      title: "Key words for use in RFCs to Indicate Requirement Levels",
      href: "https://www.rfc-editor.org/rfc/rfc2119",
      status: "Best Current Practice",
      publisher: "IETF",
    },
    "XACML30": {
      title: "eXtensible Access Control Markup Language (XACML) Version 3.0",
      href: "https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html",
      status: "OASIS Standard",
      date: "2013-01-22",
      publisher: "OASIS",
    },
    "NIST-SP-800-162": {
      title: "Guide to Attribute Based Access Control (ABAC) for the Federal Government (NIST SP 800-162)",
      href: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-162.pdf",
      status: "Final",
      date: "2014",
      publisher: "NIST",
    },
    "RFC8174": {
      title: "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words",
      href: "https://www.rfc-editor.org/rfc/rfc8174",
      date: "May 2017",
      status: "Best Current Practice",
      publisher: "IETF",
    },
    "OAC": {
      title: "ODRL Profile for Access Control (OAC)",
      href: "https://besteves4.github.io/odrl-access-control-profile/oac.html",
      authors: ["B. Esteves"],
      status: "Unofficial Draft",
      date: "2023"
    },
    "ODRL-VC": {
      title: "ODRL Profile using Verifiable Credential (ODRL-VC)",
      href: "https://lists.w3.org/Archives/Public/public-odrl/2024Feb/0025.html",
      authors: ["J. Cornejo"],
      status: "Mailing list post",
      date: "2024"
    },
    "SHACL-ACL": {
      title: "SHACL-ACL: A SHACL-based Access Control Framework for RDF Data",
      href: "https://2023.eswc-conferences.org/wp-content/uploads/2023/05/paper_Rohde_2023_SHACL-ACL.pdf",
      authors: ["P. Rohde", "M. Martin", "T. Käfer"],
      status: "In The Semantic Web: ESWC 2023 Satellite Events",
      date: "2023"
    }
  }
};