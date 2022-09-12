var documenterSearchIndex = {"docs":
[{"location":"SobolSensitivityEstimator/#Provide-different-methods-of-estimating-Sobol-indices","page":"Sobol methods","title":"Provide different methods of estimating Sobol indices","text":"","category":"section"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"The Subglobal sensitivity analysis (SA) is a global SA around a subspace of the entire parameter space. One kind of global SA is the computation of Sobol indices and there are many methods of computing these (see e.g. help of the sensitivity R package ).","category":"page"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"In order to combine Subglobal SA with different methods of estimation of Sobol indices, there is interface SobolSensitivityEstimator, which can be implemented to support other methods.","category":"page"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"The first method, generate_design_matrix, creates a design matrix (nrec × npar) with parameter vectors in rows. ","category":"page"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"The second method, estimate_sobol_indices, takes a vector of computed results for each of the design matrix parameters, and computes first and total Sobol indices.","category":"page"},{"location":"SobolSensitivityEstimator/#Index","page":"Sobol methods","title":"Index","text":"","category":"section"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"Pages = [\"SobolSensitivityEstimator.md\",]","category":"page"},{"location":"SobolSensitivityEstimator/#Types","page":"Sobol methods","title":"Types","text":"","category":"section"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"SensitivityEstimator\nSobolSensitivityEstimator\ngenerate_design_matrix\nget_design_matrix\nestimate_sobol_indices","category":"page"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.SensitivityEstimator","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.SensitivityEstimator","text":"Abstract supertype of Sensitivity Estimators\n\n\n\n\n\n","category":"type"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.SobolSensitivityEstimator","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.SobolSensitivityEstimator","text":"Abstract supertype of Sensitivity Estimators returning Sobol indices.\n\nSubtypes need to implement the following functions:\n\ngenerate_design_matrix\nget_design_matrix\nestimate_sobol_indices\n\nIf it implements trait , then it need also implement\n\nreload_design_matrix\n\n\n\n\n\n","category":"type"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.generate_design_matrix","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.generate_design_matrix","text":"generate_design_matrix(estim::SobolSensitivityEstimator, X1, X2)\n\nGenerate the design matrix based on the two samples of parameters, where each row is a parameter sample. For return value see get_design_matrix.\n\nIf the subtype supports_reloading(subtype) != SupportsReloadingNo(), then after this  a call to generate_design_matrix it should be able to recreate its state using method reload_design_matrix.\n\n\n\n\n\n","category":"function"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.get_design_matrix","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.get_design_matrix","text":"get_design_matrix(estim)\n\nReturn the design matrix: a matrix with parameters in rows, for which to compute the output, whose sensitivty ist studies.    \n\n\n\n\n\n","category":"function"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.estimate_sobol_indices","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.estimate_sobol_indices","text":"estimate_sobol_indices(rest::RSobolEstimator, y, par_names=missing)\n\nEstimate the Sobol sensitivity indices for the given result, y, for each  row of the desing matrix.\n\nValue\n\nA DataFrame with columns\n\npar: parameter name\nindex: which one of the SOBOL-indices, :first_order or :total\nvalue: the estimate\ncf_lower and cf_upper: estimates of the confidence interval. The meaning,   i.e. with of the interval is usually parameterized when creating the   sensitivity estimator object (see e.g. SobolTouati).\n\n\n\n\n\n","category":"function"},{"location":"SobolSensitivityEstimator/#supports_reloading-trait","page":"Sobol methods","title":"supports_reloading trait","text":"","category":"section"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"Reference for the concept explained at How to reload the design matrix.","category":"page"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"supports_reloading\nreload_design_matrix","category":"page"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.supports_reloading","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.supports_reloading","text":"Trait that indicates that object can be called with method  reload_design_matrix.\n\nImplenment this trait by supports_reloading(subtype) = SupportsReloadingYes()\n\n\n\n\n\n","category":"function"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.reload_design_matrix","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.reload_design_matrix","text":"reload_design_matrix(::SupportsReloadingYes, estim::SobolSensitivityEstimator)\n\nReload the design matrix,  i.e. recreate the state after last call to generate_design_matrix\n\n\n\n\n\n","category":"function"},{"location":"SobolSensitivityEstimator/#Sobol-estimation-methods","page":"Sobol methods","title":"Sobol estimation methods","text":"","category":"section"},{"location":"SobolSensitivityEstimator/","page":"Sobol methods","title":"Sobol methods","text":"SobolTouati","category":"page"},{"location":"SobolSensitivityEstimator/#SubglobalSensitivityAnalysis.SobolTouati","page":"Sobol methods","title":"SubglobalSensitivityAnalysis.SobolTouati","text":"SobolTouati(;conf = 0.95, rest = RSobolEstimator(\"sens_touati\", nothing))\n\nConcrete type of SobolSensitivityEstimator, based on method soboltouati from  the sensitivityR package . It computes both first-order and total indices using  correlation coefficients-based formulas, at a total cost of n(p+2)n model evaluations. It also computes their confidence intervals based on asymptotic properties of  empirical correlation coefficients.\n\nArguments\n\nconf: range of the confidence interval around Sobol indices to be estimated\nrest=RSobolEstimator(varname, filename): Can adjust R variable name of the  sensitivity object, and the filename of the  backupof this object. By providing a filename, the estimator can be recreated, after needing to restart the R session (see How to reload the design matrix). \n\n\n\n\n\n","category":"type"},{"location":"estimate_subglobal/#Subglobal-sensitivity-analysis","page":"Subglobal SA","title":"Subglobal sensitivity analysis","text":"","category":"section"},{"location":"estimate_subglobal/","page":"Subglobal SA","title":"Subglobal SA","text":"Pages = [\"estimate_subglobal.md\",]","category":"page"},{"location":"estimate_subglobal/","page":"Subglobal SA","title":"Subglobal SA","text":"estimate_subglobal_sobol_indices\nfit_distributions","category":"page"},{"location":"estimate_subglobal/#SubglobalSensitivityAnalysis.estimate_subglobal_sobol_indices","page":"Subglobal SA","title":"SubglobalSensitivityAnalysis.estimate_subglobal_sobol_indices","text":"estimate_subglobal_sobol_indices(f, parmsModeUpperRows, p0; \n    estim::SobolSensitivityEstimator=SobolTouati(),\n    n_sample = 500, δ_cp = 0.1, names_opt, targets)\n\nEstimate the Sobol sensitivity indices for a subspace of the global space around parameter vector p0.\n\nThe subspace to sample is determined by an area in the cumulative probability function, specifically for parameter ipar: cdf(p0) ± δcp. Samples are drawn from this cdf-scale and converted back to quantiles at the parameter scale.\n\nSobol indices are estimated using the method of Touati (2016), which has a total cost of (p+2)n, where p is the number of parameters and n is the number of samples in each of the two random parameter samples.\n\nArguments\n\nf: a function to compute a set of results, whose sensitivity is to be inspected, from parametes (p1, p2, ...) -> NamedTuple{NTuple{N,NT}} where NT <: Number,  for example fsens = (a,b) -> (;target1 = a + b -1, target2 = a + b -0.5).\nparmsModeUpperRows: a Vector of Tuples of the form  (:par_name, Distribution, mode, 95%_quantile) where Distribution is a non-parameterized Object from Distributions.jl such as LogNormal. Alternatively, the argument can be the result of fit_distributions\np0: the parameter around which the samples are drawn.\n\nOptional\n\nestim: The SobolSensitivityEstimator, responsible for generating the  design matrix and computing the indices for a given result\nn_sample = 500: the number of parameter-vectors in each of the samples  used by the sensitivity method.\nδ_cp = 0.1: the range around cdf(p0_i) to sample.\nmin_quant=0.005 and max_quant=0.995: to constrain the range of  cumulative probabilities when parameters are near the ends of the distribution.\ntargets: a NTuple{Symbol} of subset of the outputs of f, to constrain the  computation to specific outputs.\nnames_opt: a NTuple{Symbol} of subset of the parameters given with parmsModeUpperRows\n\nReturn value\n\nA DataFrame with columns\n\npar: parameter name \nindex: which one of the SOBOL-indices, :first_order or :total\nvalue: the estimate\ncf_lower and cf_upper: estimates of the 95% confidence interval\ntarget: the result, for which the sensitivity has been computed\n\nExample\n\nusing Distributions\nparmsModeUpperRows = [\n    (:a, LogNormal, 0.2 , 0.5),\n    (:b, LogitNormal, 0.7 , 0.9),\n];\np0 = Dict(:a => 0.34, :b => 0.6)\nfsens = (a,b) -> (;target1 = 10a + b -1, target2 = a + b -0.5)\n# note, for real analysis use larger sample size\ndf_sobol = estimate_subglobal_sobol_indices(fsens, parmsModeUpperRows, p0; n_sample = 50)\n\n\n\n\n\n","category":"function"},{"location":"estimate_subglobal/#SubglobalSensitivityAnalysis.fit_distributions","page":"Subglobal SA","title":"SubglobalSensitivityAnalysis.fit_distributions","text":"fit_distributions(tups)\nfit_distributions!(df)\n\nFor each row, fit a distribution of type dType to mode and upper quantile.\n\nIn the first variant, parameters are specified as a vector of tuples, which are  converted to a DataFrame. A new column :dist with a concrete Distribution is added. The second variant modifies a DataFrame with corresponding input columns.\n\n\n\n\n\n","category":"function"},{"location":"install_R_dependencies/#Reference","page":"R dependencies","title":"Reference","text":"","category":"section"},{"location":"install_R_dependencies/","page":"R dependencies","title":"R dependencies","text":"Pages = [\"install_R_dependencies.md\",]","category":"page"},{"location":"install_R_dependencies/","page":"R dependencies","title":"R dependencies","text":"install_R_dependencies","category":"page"},{"location":"install_R_dependencies/#SubglobalSensitivityAnalysis.install_R_dependencies","page":"R dependencies","title":"SubglobalSensitivityAnalysis.install_R_dependencies","text":"install_R_dependencies(packages; lib)\n\nInstall R packages, vector packages, into R library, lib. The lib directory is created, if it does not exist yet, and prepended to the R library path.  lib defaults to the user R-library. \n\nCAUTION: Installing packages to the R user library may interfere with other R projects, because it changes from where libraries and its versions are loaded.\n\nAlternatively, install into a R-session specific library path, by using lib = RCall.rcopy(R\"file.path(tempdir(),'session-library')\"). This does not intefere, but needs to be re-done on each new start of R, and needs  adding RCall.jl to users project dependencies and imports.\n\n\n\n\n\n","category":"function"},{"location":"getting_started/#Getting-started","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Assume we have a simple model, fsens,  which depends on two parameters, a and b and produces two outputs, target1 and target2.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"fsens = (a,b) -> (;target1 = 10a + b -1, target2 = a + b -0.5)\nnothing # hide","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"Our knowledge about reasonable model parameters is encoded by a prior probability distribution. We can specify those by the kind of distribution, its mode and an upper quantile. ","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"using SubglobalSensitivityAnalysis, Distributions\nparmsModeUpperRows = [\n    (:a, LogNormal, 0.2 , 0.5),\n    (:b, LogitNormal, 0.7 , 0.9),\n]\nnothing # hide","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"The output DataFrame reports ","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"the estimated index and confidence bounds (column value, cflower, cfupper)\nfor each of the parameter/index_type/output combinations","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"We can provide this directly to estimate_subglobal_sobol_indices below, or we  estimate/specify distribution parameters directly in a DataFrame with column :dist.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"df_dist = fit_distributions(parmsModeUpperRows)","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"While these distributions are reasonable for each parameter, there are  probably parameter combinations that produce unreasonable results. Hence, we want to restrict our analysis to a parameter space around a central parameter vector, p0.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"p0 = Dict(:a => 0.34, :b => 0.6)\nnothing # hide","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"By default a range around p0 is created that covers 20% of the cumulative probability range, i.e a span of 0.2.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"import SubglobalSensitivityAnalysis as CP\nusing Plots, StatsPlots\ndf2 = copy(df_dist)\nset_reference_parameters!(df2, p0)\nCP.calculate_parbounds!(df2; δ_cp = 0.1)\nipar = 2\nipar = 1\npl_cdf = plot(df2.dist[ipar], xlabel=df2.par[ipar], ylabel=\"cumulative probability\", \n    label=nothing; func = cdf)\nvline!([df2.ref[ipar]], color = \"orange\", label = \"p0\")\nhline!([df2.cp_ref[ipar]], color = \"maroon\", linestyle=:dash, label = \"cdf(p0)\")\nhspan!(collect(df2[ipar,[:cp_sens_lower,:cp_sens_upper]]), \n    color = \"maroon\", alpha = 0.2, label = \"cdf(sens_range)\")\nvspan!(collect(df2[ipar,[:sens_lower,:sens_upper]]), \n    color = \"blue\", label = \"sens_range\", alpha = 0.2)\n\npl_pdf = plot(df2.dist[ipar], xlabel=df2.par[ipar], ylabel=\"probability density\", \n    label=nothing)\nvline!([df2.ref[ipar]], color = \"orange\", label = \"p0\")\nvspan!(collect(df2[ipar,[:sens_lower,:sens_upper]]), \n    color = \"blue\", label = \"sens_range\", alpha = 0.2)","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"pl_cdf # hide","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"For this range 20% of the area under the probability density  function is covered.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"pl_pdf # hide","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"The design matrix for the sensitivity analysis is  constructed in the  cumulative densities and transformed to parameter values. For each of the parameter vectors of the design matrix an output is computed.  Now the Sobol indices and their confidence ranges can be computed for this output.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"All this encapsulated by function estimate_subglobal_sobol_indices.","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"# note, for real analysis use a larger sample size\ndf_sobol = estimate_subglobal_sobol_indices(fsens, df_dist, p0; n_sample = 50)\ndf_sobol","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"The resulting DataFrame reports:","category":"page"},{"location":"getting_started/","page":"Getting started","title":"Getting started","text":"the estimated Sobol indeces and their confidence bounds  (columns value, cflower, cfupper)\nfor all the combinations of parameter, which index, and output (columns par, index, target)   ","category":"page"},{"location":"internal/#Internal-methods","page":"Internal","title":"Internal methods","text":"","category":"section"},{"location":"internal/","page":"Internal","title":"Internal","text":"Pages = [\"internal.md\",]","category":"page"},{"location":"internal/","page":"Internal","title":"Internal","text":"CP.calculate_parbounds!(df_dist)\nCP.get_uniform_cp_sample(df_dist, n_sample)","category":"page"},{"location":"internal/#SubglobalSensitivityAnalysis.calculate_parbounds!-Tuple{Any}","page":"Internal","title":"SubglobalSensitivityAnalysis.calculate_parbounds!","text":"calculate_parbounds(dist, x; δ_cp = 0.1 )\n\ncompute the values at quantiles ±δcp around x with δcp difference in the cumulated probability.  The quantiles are constrained to not extend beyond min_quant and max_quant.\n\nIt returns a NamedTuple of\n\nsens_lowe: lower quantile\nsens_upper: upper quantile\ncp_ref: cdf of x (cumulative distribution function, i.e. p-value)\ncpsenslower: cdf of lower quantile\ncpsensupper: cdf of upper quantile\n\nA wider distribution prior distribution will result in a wider intervals.\n\nThe DataFrame variant assumes x as column :ref to be present and  adds/modifies output columns (named as above outputs).\n\n\n\n\n\n","category":"method"},{"location":"internal/#SubglobalSensitivityAnalysis.get_uniform_cp_sample-Tuple{Any, Any}","page":"Internal","title":"SubglobalSensitivityAnalysis.get_uniform_cp_sample","text":"get matrix (nsample, npar) with uniformly sampled in cumaltive p domain\n\n\n\n\n\n","category":"method"},{"location":"reload_design/#How-to-reload-the-design-matrix","page":"Reload the design matrix","title":"How to reload the design matrix","text":"","category":"section"},{"location":"reload_design/#Problem","page":"Reload the design matrix","title":"Problem","text":"","category":"section"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Computation of outputs for many parameter vectors can take long. It may happen that the Julia session or the associated R session in which the sensitivity object was constructed has been lost such as a disconnected ssh-session. ","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"If the information on the design matrix has been lost, the computed outputs cannot be used any more. Hence, the SobolTouati estimator class provides a method to save intermediate results to file  and to be reconstructed from there.","category":"page"},{"location":"reload_design/#Providing-the-filename","page":"Reload the design matrix","title":"Providing the filename","text":"","category":"section"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"We reuse the example from Getting started.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"using SubglobalSensitivityAnalysis, Distributions\nfsens = (a,b) -> (;target1 = 10a + b -1, target2 = a + b -0.5)\nparmsModeUpperRows = [\n    (:a, LogNormal, 0.2 , 0.5),\n    (:b, LogitNormal, 0.7 , 0.9),\n]\np0 = Dict(:a => 0.34, :b => 0.6)\nnothing # hide","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"The back-filename is provided to a a custom sobol estimator where we specify the filename argument:","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"some_tmp_dir = mktempdir()\nfname = joinpath(some_tmp_dir,\"sensobject.rds\")\nestim_file = SobolTouati(;rest=RSobolEstimator(\"sens_touati\", fname))\nnothing # hide","category":"page"},{"location":"reload_design/#Performing-the-sensitivity-analysis","page":"Reload the design matrix","title":"Performing the sensitivity analysis","text":"","category":"section"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Instead of letting estimate_subglobal_sobol_indices call our model, here, we do the steps by hand.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"First, we estimate the distributions and add the center parameter values.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"df_dist = fit_distributions(parmsModeUpperRows)\nset_reference_parameters!(df_dist, p0)\nnothing # hide","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Next, we compute the ranges of the parameters in cumulative probability space and draw two samples.  We need to use unexported functions and qualify their names.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"import SubglobalSensitivityAnalysis as CP\nCP.calculate_parbounds!(df_dist)\nn_sample = 10\nX1 = CP.get_uniform_cp_sample(df_dist, n_sample);\nX2 = CP.get_uniform_cp_sample(df_dist, n_sample);\nnothing # hide","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Next, we create the design matrix using the samples.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"cp_design = generate_design_matrix(estim_file, X1, X2);\nsize(cp_design)","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Next, we","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"transform the design matrix from cumulative to original parameter space, \ncompute outputs for each of the parameter vectors in rows, and \nextract the first output from the result as a vector.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"q_design = CP.transform_cp_design_to_quantiles(df_dist, cp_design);\nres = map(r -> fsens(r...), eachrow(q_design));\ny = [tup[:target1] for tup in res];\nnothing # hide","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Now we can tell the output to the estimator and compute sobol indices:","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"df_sobol = estimate_sobol_indices(estim_file, y)","category":"page"},{"location":"reload_design/#Reloading","page":"Reload the design matrix","title":"Reloading","text":"","category":"section"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Assume after computing the outputs and backing them up to a file, our Julia session has crashed. The original samples to create the design matrix are lost, but we need to recreate the estimator object.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"We create a new estimator object with the same file name from above and tell it to reload the design matrix from the file.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"estim_file2 = SobolTouati(;rest=RSobolEstimator(\"sens_touati\", fname))\ncp_design2 = reload_design_matrix(estim_file2);\nnothing # hide","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"Now our new estimator object is in the state of the former estimator object and we can use is to compute sensitivity indices.","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"df_sobol2 = estimate_sobol_indices(estim_file2, y)\nall(isapprox.(df_sobol2.value, df_sobol.value))","category":"page"},{"location":"reload_design/","page":"Reload the design matrix","title":"Reload the design matrix","text":"rm(some_tmp_dir, recursive=true)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = SubglobalSensitivityAnalysis","category":"page"},{"location":"#SubglobalSensitivityAnalysis","page":"Home","title":"SubglobalSensitivityAnalysis","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for package  SubglobalSensitivityAnalysis.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Estimating Sobol sensitivity indices for a subspace of the global space  around a parameter vector p0.","category":"page"},{"location":"#Problem","page":"Home","title":"Problem","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Results of global sensitivity analysis (SA) are sometimes strongly influenced by outliers resulting from unreasonable parameter combinations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The idea is to still apply global SA, but only to a subset of the entire possible parameter region around a reasonable parameter set.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The user specifies a probability distribution function of each parameter, and the subglobal method ensures that a parameter range is sampled, so that a given proportion (default %20) under its prior pdf is covered.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This ensures that for a parameter with wide distribution also a wide range is sampled, and that more samples are drawn where the prior probability of the parameter is higher.","category":"page"},{"location":"#How","page":"Home","title":"How","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Setup arguments and call the main function estimate_subglobal_sobol_indices, as described in the example doctest.","category":"page"}]
}
