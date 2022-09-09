# SubglobalSensitivityAnalysis

[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://bgctw.github.io/SubglobalSensitivityAnalysis.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://bgctw.github.io/SubglobalSensitivityAnalysis.jl/dev/)
[![Build Status](https://github.com/bgctw/SubglobalSensitivityAnalysis.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/bgctw/SubglobalSensitivityAnalysis.jl/actions/workflows/CI.yml?query=branch%3Amain)
[![Coverage](https://codecov.io/gh/bgctw/SubglobalSensitivityAnalysis.jl/branch/main/graph/badge.svg)](https://codecov.io/gh/bgctw/SubglobalSensitivityAnalysis.jl)

Estimating Sobol sensitivity indices for a subspace of the global space 
around a parameter vector, `p0`.

## Problem
Results of global sensitivity analysis (SA) are sometimes strongly influenced
by outliers resulting from unreasonable parameter combinations.

The idea is to still apply global SA, but only to a subset of the entire
possible parameter region around a reasonable parameter set.

The user specifies a probability distribution function of each parameter,
and the subglobal method ensures that a parameter range is sampled, so that
a given proportion (default %20) under its prior pdf is covered.

This ensures that for a parameter with wide distribution also a wide
range is sampled, and that more samples are drawn where the prior probability
of the parameter is higher.

## How 
Setup arguments and call the main function [`estimate_subglobal_sobol_indices`](https://bgctw.github.io/SubglobalSensitivityAnalysis.jl/dev/reference/#SubglobalSensitivityAnalysis.estimate_subglobal_sobol_indices),
as described in the example doctest.
